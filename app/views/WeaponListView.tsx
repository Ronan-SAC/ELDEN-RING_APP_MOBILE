import React from 'react';
import { useRouter } from 'expo-router';
import { useWeaponListViewModel } from '../../viewmodels/useWeaponListViewModel';
import { EntityListView } from '../../components/EntityListView';

export default function WeaponListView() {
  const router = useRouter();
  const { weaponOptions, isLoading } = useWeaponListViewModel();

  return (
    <EntityListView
      title="Weapons"
      options={weaponOptions}
      isLoading={isLoading}
      getSubtitle={(weapon) => weapon.description}
      getMeta={(weapon) => (weapon.weight != null ? `${weapon.weight} kg` : undefined)}
      onSelect={(weapon) =>
        router.push({
          pathname: '/views/WeaponDetailsView',
          params: { query: weapon.name },
        })
      }
    />
  );
}
