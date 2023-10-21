"use client"

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { GitHubCommit } from './CommitsTimeline';

interface OppositeContentTimelineProps {
    commits: GitHubCommit[];
}

export default function OppositeContentTimeline({ commits }: OppositeContentTimelineProps) {

    function formatTimestampChile(timestamp: string): string {
        const date = new Date(timestamp);

        return date.toLocaleString('es-CL', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: 'America/Santiago'
        });
    }

    return (
        <Timeline position="alternate-reverse">
            {commits.map((githubCommit: GitHubCommit, index: number) => {
                return (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent>
                            {formatTimestampChile(githubCommit.commit.author.date)}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>{githubCommit.commit.message}</TimelineContent>
                    </TimelineItem>
                )
            })}
        </Timeline>
    );
}