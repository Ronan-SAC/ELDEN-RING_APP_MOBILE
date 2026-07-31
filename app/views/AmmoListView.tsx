import React from 'react';
import { useRouter } from 'expo-router';
import { useAmmoListViewModel } from '../../viewmodels/useAmmoListViewModel';
import { EntityListView } from '../../components/EntityListView';

export default function AmmoListView() {
  const router = useRouter();
  const { ammoOptions, isLoading } = useAmmoListViewModel();

  return (
    <EntityListView
      title="Ammo"
      options={ammoOptions}
      isLoading={isLoading}
      getSubtitle={(ammo) => ammo.description}
      getMeta={(ammo) => ammo.type}
      onSelect={(ammo) =>
        router.push({
          pathname: '/views/AmmoDetailsView',
          params: { query: ammo.name },
        })
      }
    />
  );
}
