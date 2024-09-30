'use client';

import { useList } from '@refinedev/core';

export default function Resources() {
    const { data } = useList({
        resource : 'resources'
    });

    return (
        <div style={{ height : '100vh', padding : '1rem' }}>
            <h1>Resources</h1>
            <ul style={{ padding : '1rem' }}>
                {data?.data?.map((resource) => (
                    <li key={resource.id}>
                        {resource.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
