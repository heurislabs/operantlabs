import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { YouTubeModal } from "@/components/YouTubeModal";
import {
  IconBuildingStore,
  IconHospital,
  IconBuilding,
  IconPlane,
  IconChefHat,
  IconShield,
} from "@tabler/icons-react";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Retail Revolution",
      description: "How OL Signature transformed customer service in major retail chains across Australia",
videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      icon: <IconBuildingStore className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      title: "Healthcare Innovation",
      description: "OL Smart robots improving patient care and reducing staff workload in hospitals",
videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      icon: <IconHospital className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Corporate Efficiency",
      description: "Enterprise deployment of OL Infinity for seamless office logistics",
videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      icon: <IconBuilding className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Airport Operations",
      description: "OL Echo providing 24/7 passenger assistance at Melbourne Airport",
videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      icon: <IconPlane className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
    },
    {
      title: "Restaurant Automation",
      description: "QSR chains boost efficiency with OL Envoro waste management solutions",
videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      icon: <IconChefHat className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Security Excellence",
      description: "OL Iron protecting high-value deliveries in banking and corporate sectors",
videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      icon: <IconShield className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See how our robots are transforming industries and improving operations across Australia
        </p>
      </div>
      
      <BentoGrid className="max-w-4xl mx-auto">
        {caseStudies.map((study, i) => (
          <BentoGridItem
            key={i}
            title={study.title}
            description={study.description}
            header={
              <YouTubeModal
                videoId={study.videoId}
                title={study.title}
                thumbnail={study.thumbnail}
                className="w-full h-32 bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              />
            }
            icon={study.icon}
            className={study.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
