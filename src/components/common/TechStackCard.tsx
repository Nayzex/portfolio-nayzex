import { LucideIcon } from 'lucide-react';

interface TechStackCardProps {
  category: string;
  icon: LucideIcon;
  technologies: Array<{
    name: string;
    level: string;
  }>;
}

export default function TechStackCard({ category, icon: Icon, technologies }: TechStackCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-100 text-green-700';
      case 'Avancé': return 'bg-blue-100 text-blue-700';
      case 'Intermédiaire': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-6 rounded-xl border border-gray-700" style={{ backgroundColor: '#343a40' }}>
      {/* Category Header */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-3 text-white">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-semibold text-lg text-white">{category}</h3>
      </div>
      
      {/* Technologies List */}
      <div className="space-y-3">
        {technologies.map((tech, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <span className="text-gray-200 font-medium">{tech.name}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(tech.level)}`}>
              {tech.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
