"use client";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import Image from "next/image";

export function TimelineWithAvatar() {
  return (
    <div className="w-full">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                placeholder=""
                size="xl"
                src="/img/team-1.jpg"
                alt="user 1"
                withBorder
              />
            </TimelineIcon>
            <Typography placeholder="" variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography placeholder="" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                placeholder=""
                size="xl"
                src="/img/team-2.jpg"
                alt="user 2"
                withBorder
              />
            </TimelineIcon>
            <Typography placeholder="" variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography placeholder="" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Image
                className="w-1/8"
                width={200}
                height={200}
                src="/img/team-3.jpg"
                alt="user 3"
              />
            </TimelineIcon>
            <Typography placeholder="" variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography placeholder="" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
