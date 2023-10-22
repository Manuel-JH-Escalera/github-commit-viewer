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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useDarkModeStore from '../stores/darkModeStore';
import { Hind_Vadodara   } from "next/font/google";

const hind_vadodara = Hind_Vadodara ({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

interface OppositeContentTimelineProps {
    commits: GitHubCommit[];
}

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#bae6fd',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#15803d',
            dark: '#ba000d',
            contrastText: '#000',
        },
        text: {
            primary: '#fff',
            secondary: '#000',
        }
    },
    typography: {
        fontSize: 16,
        fontFamily: hind_vadodara.style.fontFamily
    }
});

function OppositeContentTimeline({ commits }: OppositeContentTimelineProps) {

    const { isDarkMode } = useDarkModeStore()

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
        <ThemeProvider theme={theme}>
            <Timeline position="alternate-reverse">
                {commits.map((githubCommit: GitHubCommit, index: number) => {
                    return (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent color={isDarkMode ? 'text.primary' : 'text.secondary'} typography="typography.hind_vadodara">
                                {formatTimestampChile(githubCommit.commit.author.date)}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={isDarkMode ? 'primary' : 'secondary'}/>
                                <TimelineConnector color={isDarkMode ? 'text.primary' : 'text.secondary'}/>
                            </TimelineSeparator>
                            <TimelineContent color={isDarkMode ? 'text.primary' : 'text.secondary'} typography="typography.hind_vadodara">{githubCommit.commit.message}</TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </ThemeProvider>
    );
}

export default OppositeContentTimeline;