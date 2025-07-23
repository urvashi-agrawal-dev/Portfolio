import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="h-48 bg-gray-100"></div> {/* Placeholder for image */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-sm rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <a href={link} className="text-blue-600 hover:underline">View Project →</a>
      </div>
    </motion.div>
  );
}