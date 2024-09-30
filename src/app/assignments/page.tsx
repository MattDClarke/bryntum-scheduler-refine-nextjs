'use client';

import { useList } from '@refinedev/core';

export default function Assignments() {
    const { data } = useList({
        resource : 'assignments'
    });

    return (
        <div style={{ height : '100vh', padding : '1rem' }}>
            <h1>Assignments</h1>
            <ul style={{ padding : '1rem' }}>
                {data?.data?.map((assignment) => (
                    <li key={assignment.id}>
                        Resource ID: {assignment.resourceId} - Event ID: {assignment.eventId}
                    </li>
                ))}
            </ul>
        </div>
    );
}
