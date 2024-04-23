import { CreditCardIcon, HistoryIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CreditBalanceInfoCard = () => {
  return (
    <div className="overflow-hidden rounded-lg border bg-primary-800 shadow">
      <div className="overflow-hidden rounded-lg bg-primary-500 bg-[url('/images/credit-card-wave-bg.png')] bg-contain bg-bottom bg-no-repeat p-6 shadow-lg">
        <div className="flex flex-col-reverse items-start justify-between space-y-4 space-y-reverse rounded-lg text-white sm:flex-row sm:space-x-12 sm:space-y-0">
          <div>
            <h3 className="text-xl font-semibold">Credit Balance</h3>
            <p className="mt-1 text-gray-100/95">
              The balance used to purchase materials on the LMS Solelands
              website
            </p>
          </div>
          <p className="text-5xl font-semibold">35</p>
        </div>
        <div className="mt-4 flex justify-between space-x-2">
          <Button variant="outline" className="space-x-2">
            <CreditCardIcon className="size-5" />
            <span>Top up</span>
          </Button>
          <Button variant="outline" className="space-x-2">
            <HistoryIcon className="size-5" />
            <span>History</span>
          </Button>
        </div>
      </div>
      <div className="flex justify-between space-x-2 px-6 py-2 text-sm text-white">
        <p>Expired</p>
        <p>12 December 2024</p>
      </div>
    </div>
  );
};

export { CreditBalanceInfoCard };
