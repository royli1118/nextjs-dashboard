<<<<<<< HEAD
'use client'
=======
>>>>>>> 84451a4fbf34d1b2ae89dce2a10a04cc4e1d09b6
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
<<<<<<< HEAD
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
=======

>>>>>>> 84451a4fbf34d1b2ae89dce2a10a04cc4e1d09b6
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
<<<<<<< HEAD
  const pathname = usePathname();
=======
>>>>>>> 84451a4fbf34d1b2ae89dce2a10a04cc4e1d09b6
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
<<<<<<< HEAD
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
          )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
=======
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
>>>>>>> 84451a4fbf34d1b2ae89dce2a10a04cc4e1d09b6
        );
      })}
    </>
  );
}
