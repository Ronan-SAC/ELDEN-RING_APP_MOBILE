import React from 'react';
import { useRouter } from 'expo-router';
import { useShieldListViewModel } from '../../viewmodels/useShieldListViewModel';
import { EntityListView } from '../../components/EntityListView';

export default function ShieldListView() {
  const router = useRouter();
  const { shieldOptions, isLoading } = useShieldListViewModel();

  return (
    <EntityListView
      title="Shields"
      options={shieldOptions}
      isLoading={isLoading}
      getSubtitle={(shield) => shield.description}
      getMeta={(shield) => (shield.weight != null ? `${shield.weight} kg` : undefined)}
      onSelect={(shield) =>
        router.push({
          pathname: '/views/ShieldDetailsView',
          params: { query: shield.name },
        })
      }
    />
  );
}
