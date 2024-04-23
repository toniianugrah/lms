import { ID, US } from 'country-flag-icons/react/3x2';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils/class-names';

const LANGUAGES = [
  {
    title: 'English',
    short: 'EN',
    icon: US,
  },
  {
    title: 'Bahasa',
    short: 'ID',
    icon: ID,
  },
];

const LanguageSelect = ({ className }) => {
  const Icon = LANGUAGES[0].icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={cn('space-x-2', className)}>
          <Icon className="w-6 rounded-[2px] border border-gray-200" />
          <span className="hidden font-normal sm:inline">
            {LANGUAGES[0].title}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          {LANGUAGES.map((lang) => (
            <DropdownMenuItem
              key={lang.short}
              className="flex items-center space-x-2"
              onClick={() => {}}
            >
              <lang.icon className="w-6 rounded-[2px] border border-gray-200" />
              <span>{lang.title}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LanguageSelect };
