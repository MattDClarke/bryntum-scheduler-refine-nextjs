import { readFileSync } from 'fs';
import sequelize from './config/database.js';
import { Assignment, Event, Resource } from './models/index.js';

async function setupDatabase() {
    // Wait for all models to synchronize with the database
    await sequelize.sync();

    // Now add example data
    await addExampleData();
}

async function addExampleData() {
    try {
    // Read and parse the JSON data
        const eventsData = JSON.parse(
            readFileSync('./src/initialData/events.json')
        );

        const resourcesData = JSON.parse(
            readFileSync('./src/initialData/resources.json')
        );

        const assignmentsData = JSON.parse(
            readFileSync('./src/initialData/assignments.json')
        );

        await sequelize.transaction(async(t) => {
            // Create resources first
            const resources = await Resource.bulkCreate(resourcesData, {
                transaction : t
            });

            const events = await Event.bulkCreate(eventsData, {
                transaction : t
            });

            const assignments = await Assignment.bulkCreate(
                assignmentsData,
                {
                    transaction : t
                }
            );
            return { resources, events, assignments };
        });

        console.log('resources, events, and assignments added to database successfully.');
    }
    catch (error) {
        console.error('Failed to add data to database due to an error: ', error);
    }
}

setupDatabase();
