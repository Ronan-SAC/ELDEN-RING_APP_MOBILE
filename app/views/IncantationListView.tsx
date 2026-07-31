import React from 'react';
import { useRouter } from 'expo-router';
import { useIncantationListViewModel } from '../../viewmodels/useIncantationListViewModel';
import { EntityListView } from '../../components/EntityListView';

export default function IncantationListView() {
  const router = useRouter();
  const { incantationOptions, isLoading } = useIncantationListViewModel();

  return (
    <EntityListView
      title="Incantations"
      options={incantationOptions}
      isLoading={isLoading}
      getSubtitle={(incantation) => incantation.description}
      getMeta={(incantation) => (incantation.cost != null ? `FP ${incantation.cost}` : undefined)}
      onSelect={(incantation) =>
        router.push({
          pathname: '/views/IncantationDetailsView',
          params: { query: incantation.name },
        })
      }
    />
  );
}
