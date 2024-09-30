
import { DevtoolsProvider } from '@providers/devtools';
import { GitHubBanner, Refine } from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';
import routerProvider from '@refinedev/nextjs-router';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

import { dataProvider } from '@providers/data-provider';
import '@styles/global.css';

export const metadata: Metadata = {
    title       : 'Bryntum Scheduler in Refine',
    description : 'Create a Bryntum Scheduler component in a Refine application using NextJS',
    icons       : {
        icon : '/favicon.ico'
    }
};

export default function RootLayout({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Suspense>
                    <GitHubBanner />
                    <RefineKbarProvider>
                        <DevtoolsProvider>
                            <Refine
                                routerProvider={routerProvider}
                                resources={[
                                    {
                                        name : 'scheduler',
                                        list : '/scheduler'
                                    },
                                    {
                                        name : 'events',
                                        list : '/events'
                                    },
                                    {
                                        name : 'resources',
                                        list : '/resources'
                                    },
                                    {
                                        name : 'assignments',
                                        list : '/assignments'
                                    }
                                ]}
                                dataProvider={dataProvider}
                                options={{
                                    syncWithLocation       : true,
                                    warnWhenUnsavedChanges : true,
                                    useNewQueryKeys        : true,
                                    projectId              : 'sqMKDm-ZNrXCx-yLq6Mv'
                                }}
                            >
                                {children}
                                <RefineKbar />
                            </Refine>
                        </DevtoolsProvider>
                    </RefineKbarProvider>
                </Suspense>
            </body>
        </html>
    );
}
