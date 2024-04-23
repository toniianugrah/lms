import { BookOpenIcon, SchoolIcon, UsersIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CreditBalanceInfoCard } from '@/components/credit-balance-info-card';
import { PageHeading } from '@/components/page-heading';
import { cn } from '@/lib/utils/class-names';

export default function DashboardPage() {
  return (
    <>
      <PageHeading>Solelands Learning Management System</PageHeading>
      <div className="mt-4 grid gap-6 lg:grid-cols-2 xl:grid-cols-5">
        <InfoCard title="Total Students" value={96} Icon={UsersIcon} />
        <InfoCard
          title="Total Classes"
          value={5}
          Icon={SchoolIcon}
          variant="green"
        />
        <InfoCard
          title="Total Contents"
          value={13}
          Icon={BookOpenIcon}
          variant="yellow"
        />
        <div className="xl:col-span-2">
          <CreditBalanceInfoCard />
        </div>
      </div>
    </>
  );
}

// Example card
function InfoCard({ title, value, variant = 'blue', Icon }) {
  return (
    <Card className="h-max">
      <CardHeader className="flex-row items-center space-x-2 space-y-0 pb-4">
        <div
          className={cn(
            'w-max rounded-md border border-blue-200 bg-blue-50 p-2',
            variant === 'green' && 'border-green-200 bg-green-50',
            variant === 'yellow' && 'border-yellow-200 bg-yellow-50'
          )}
        >
          <Icon
            className={cn(
              'size-5 stroke-blue-500',
              variant === 'green' && 'stroke-green-500',
              variant === 'yellow' && 'stroke-yellow-500'
            )}
          />
        </div>
        <p className="text-nowrap text-gray-500">{title}</p>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold">{value}</p>
      </CardContent>
    </Card>
  );
}
