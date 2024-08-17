let studentsCache = null; // Global variable to store the student array
const mongoose = require('mongoose');

const EduDetails = require('./path/to/EduDetailsModel');
const PersonalDetails = require('./path/to/PersonalDetailsModel');

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
                assigned_preference: 0, // 0 means no branch assigned
                assigned_branch: "",
                rank: rank // Use the maximum of rank_1 and rank_2
            };
        });

        // Sort the students array based on the rank
        studentsCache.sort((a, b) => a.rank - b.rank);
    }

    return studentsCache;
}

function assignBranches() {
    const seats_per_branch = 20;
    let available_seats_CSE = seats_per_branch;
    let available_seats_ECE = seats_per_branch;
    let available_seats_CCE = seats_per_branch;
    let available_seats_MECH = seats_per_branch;

    for (let i = 1; i <= 4; ++i) {
        studentsCache.forEach(student => {
            if (student.assigned_preference === 0 || i < student.assigned_preference) {
                let preference = student[`preference_${i}`];
                if (available_seats[preference] > 0) {
                    if (student.assigned_branch) {
                        available_seats[student.assigned_branch]++;
                    }

                    student.assigned_preference = i;
                    student.assigned_branch = preference;
                    available_seats[preference]--;
                }
            }
        });
    }
}

async function updateStudents() {
    for (let student of studentsCache) {
        await PersonalDetails.updateOne({ userId: student.userId }, {
            assigned_preference: student.assigned_preference,
            assigned_branch: student.assigned_branch
        });
    }
}

async function main() {
    await mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true });

    await fetchStudentData(); // Only fetch and sort data if not already done

    console.log("Assigning Branches:");
    assignBranches();

    console.log("Updating Database with assigned branches:");
    await updateStudents();

    mongoose.connection.close();
}

main().catch(err => console.error(err));
