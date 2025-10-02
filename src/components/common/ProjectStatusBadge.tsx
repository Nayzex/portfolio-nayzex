interface ProjectStatusBadgeProps {
  status: 'Terminé' | 'En cours' | 'Prototype';
  className?: string;
}

export default function ProjectStatusBadge({ status, className = '' }: ProjectStatusBadgeProps) {
  const getStatusStyles = () => {
    switch (status) {
      case 'Terminé':
        return 'bg-green-100 text-green-700';
      case 'En cours':
        return 'bg-blue-100 text-blue-700';
      case 'Prototype':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusStyles()} ${className}`}>
      {status}
    </span>
  );
}
