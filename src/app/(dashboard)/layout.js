'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { BellIcon, LogOutIcon, Menu } from 'lucide-react';
import { NAV_LINKS } from '@/config/nav';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSelect } from '@/components/language-select';
import { LargeLogo } from '@/components/logo';
import { cn } from '@/lib/utils/class-names';
import { getAvatarFallback } from '@/lib/utils/get-avatar-fallback';

export default function DashboardLayout({ children }) {
  const segment = useSelectedLayoutSegment();

  const checkIsLinkActive = ({ href, segment }) => {
    const route = href.split('/')[1] || 'dashboard';
    const isActive =
      route === 'dashboard'
        ? segment === null /* check is user on dashboard page */
        : segment === route;

    return isActive;
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-white md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <LargeLogo className="-ml-1 w-32" />
            </Link>
          </div>
          <div className="flex-1">
            <nav className="mt-2 grid items-start space-y-1 px-2 text-sm font-medium lg:px-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-primary-500',
                    checkIsLinkActive({ href: link.href, segment }) &&
                      'bg-primary-50 text-primary-600 shadow shadow-primary-200 ring-1 ring-primary-950/10 hover:text-primary-600'
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-white px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col bg-white">
              <nav className="grid gap-2 font-medium">
                <Link
                  href="/"
                  className="-ml-2 mb-4 flex items-center gap-2 font-semibold"
                >
                  <LargeLogo className="w-32" />
                </Link>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={cn(
                      'mx-[-0.65rem] flex items-center gap-4 rounded-md px-3 py-2 text-gray-500 hover:text-primary-500',
                      checkIsLinkActive({ href: link.href, segment }) &&
                        'bg-primary-50 text-primary-600 shadow shadow-primary-200 ring-1 ring-primary-950/10 hover:text-primary-600'
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.title}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <Input
                type="search"
                icon="search"
                placeholder="Search..."
                className="w-full appearance-none md:w-2/3 lg:w-1/3"
              />
            </form>
          </div>
          <LanguageSelect />
          <Button variant="outline" size="icon">
            <BellIcon className="size-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative flex flex-row items-center space-x-2 px-0 hover:bg-transparent active:bg-transparent"
              >
                <Avatar className="h-10 w-10 border">
                  {/* <AvatarImage src={user?.avatar} alt={user?.username} /> */}
                  <AvatarFallback>
                    {getAvatarFallback('Benny Kindagen')}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden flex-col items-start font-normal lg:flex">
                  <p className="text-sm">{'Benny Kindagen'}</p>
                  <p className="text-xs text-gray-500">{'School Admin'}</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm font-medium leading-none">
                    {'Benny Kindagen'}
                  </p>
                  <p className="text-xs leading-none text-gray-500">
                    {'bennykindagen@gmail.com'}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <LogOutIcon className="mr-2 size-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
