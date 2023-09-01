import { ModeToggle } from "@/components/ModeToggle";

import { UserButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<div className="flex justify-center items-center">
			<UserButton afterSignOutUrl="/"/>
			<ModeToggle />
		</div>
	);
}
