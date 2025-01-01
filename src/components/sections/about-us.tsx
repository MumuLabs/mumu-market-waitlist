"use client";

import React, { useState, useEffect } from "react";
import TeamCard from "@/components/ui/team-card";
import { teamMembers } from "@/data/data";

export function AboutUs() {
	const checkAvatarExists = async (avatarPath: string): Promise<boolean> => {
		try {
			const response = await fetch(avatarPath);
			return response.ok;
		} catch {
			return false;
		}
	};

	const [avatarExists, setAvatarExists] = React.useState<{
		[key: string]: string;
	}>({});

	React.useEffect(() => {
		const validateImages = async () => {
			const imageValidationResults: { [key: string]: string } = {};

			for (const member of teamMembers) {
				const memberImagePath = `/img/pfps/${member.name.toLowerCase().replace(/\s+/g, "-")}.avif`;
				const imageExists = await checkAvatarExists(memberImagePath);
				imageValidationResults[member.name] = imageExists
					? memberImagePath
					: "/img/pfps/placeholder.avif";
			}

			setAvatarExists(imageValidationResults);
		};

		validateImages();
	}, []);

	return (
		<section id="about" className="py-32 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
						{" "}
						{/* Changed to text-white */}
						About MuMu
					</h2>

					<p className="mt-8 text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
						We are a team of passionate software engineers who connected through
						a fellowship called
						<span className="font-semibold text-[#F5DEB3]">
							{" "}
							Headstarter AI
						</span>
						. As a team, we have a shared vision of uplifting the Ummah and
						empowering Muslim-owned businesses. We believe that by working
						together, we can create innovative, community-driven solutions that
						will benefit everyone. At
						<span className="font-semibold text-[#F5DEB3]"> Mumu</span>, we are
						more than a marketplace—we are a movement focused on empowering
						Muslim-owned businesses, streamlining the path to discovery, and
						nurturing meaningful connections worldwide. Through dedication and
						collaboration, we strive to build an accessible, inclusive platform
						that enriches the global Muslim community and helps it thrive.
					</p>
				</div>
			</div>

			<div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center">
				{teamMembers.map((member, index) => {
					let imageStyle: React.CSSProperties = {
						width: "100%",
						height: "100%",
						objectFit: "cover",
					};

					switch (member.name.toLowerCase()) {
						case "mohamad hamsho":
							imageStyle.transform = "scale(1.1)";
							imageStyle.objectPosition = "50% 30%";
							break;
						case "muhammad bilal khan":
							imageStyle.transform = "scale(1.15)";
							imageStyle.objectPosition = "50% 35%";
							break;
						case "abubaker aljahmi":
							imageStyle.transform = "scale(1.0)";
							imageStyle.objectPosition = "52% 50%";
							break;
						case "hamzah deejay":
							imageStyle.transform = "scale(1.05)";
							imageStyle.objectPosition = "50% 50%";
							break;
					}

					return (
						<div key={index} className="relative w-full">
							<TeamCard
								name={member.name}
								description={member.description}
								avatar={
									avatarExists[member.name] || "/img/pfps/placeholder.avif"
								}
								linkedin={member.linkedin ?? ""}
								github={member.github ?? ""}
								imageStyle={imageStyle}
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
}
