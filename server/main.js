require('dotenv').config();
let studentsCache = null; // Global variable to store the student array
const mongoose = require('mongoose');
const EduDetails = require('./models/EduDetails.js');
const PersonalDetails = require('./models/PersonalDetails.js');

async function fetchStudentData() {
    if (!studentsCache) {
        // Fetch education details (which now includes preferences)
        const eduDetails = await EduDetails.find({});

        // Combine the data
        studentsCache = eduDetails.map(eduDetail => {
            const rank = Math.max(parseInt(eduDetail.rank_1), parseInt(eduDetail.rank_2));

            return {
                userId: eduDetail.userId,
                application_no_1: eduDetail.application_no_1,
                application_no_2: eduDetail.application_no_2,
                rank_1: parseInt(eduDetail.rank_1),
                rank_2: parseInt(eduDetail.rank_2),
                rank_adv: parseInt(eduDetail.rank_adv),
                percentage_12: eduDetail.percentage_12,
                percentage_10: eduDetail.percentage_10,
                preference_1: eduDetail.preference_1 || "",
                preference_2: eduDetail.preference_2 || "",
                preference_3: eduDetail.preference_3 || "",
                preference_4: eduDetail.preference_4 || "",
                allotted_preference: 0, // 0 means no branch assigned
                allotted_branch: "",
                rank: rank // Use the maximum of rank_1 and rank_2
            };
        });

        // Sort the students array based on the rank
        studentsCache.sort((a, b) => a.rank - b.rank);
    }

    return studentsCache;
}

function assignBranches() {
    const seats_per_branch = 2;
    let available_seats = {
        CSE: seats_per_branch,
        ECE: seats_per_branch,
        CCE: seats_per_branch,
        MECH: seats_per_branch
    };

    studentsCache.forEach(student => {
        for (let i = 1; i <= 4; ++i) {
            let preference = student[`preference_${i}`];

            // Skip to the next student if the current preference is an empty string
            if (!preference) break;

            if (student.allotted_preference === 0 || i < student.allotted_preference) {
                if (available_seats[preference] > 0) {
                    if (student.allotted_branch) {
                        available_seats[student.allotted_branch]++;
                    }

                    student.allotted_preference = i;
                    student.allotted_branch = preference;
                    available_seats[preference]--;
                    break; // Stop further processing once a branch is assigned
                }
            }
        }
    });
}

async function updateStudents() {
    for (let student of studentsCache) {
        await PersonalDetails.updateOne({ userId: student.userId }, {
            allotted_preference: student.allotted_preference,
            alloted_branch: student.allotted_branch
        });
    }
}

async function main() {
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    await fetchStudentData(); // Only fetch and sort data if not already done

    console.log("Assigning Branches:");
    assignBranches();

    console.log("Updating Database with assigned branches:");
    await updateStudents();

    mongoose.connection.close();
}

main().catch(err => console.error(err));
