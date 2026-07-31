import React from 'react';
import { useRouter } from 'expo-router';
import { useLocationListViewModel } from '../../viewmodels/useLocationListViewModel';
import { EntityListView } from '../../components/EntityListView';

export default function LocationListView() {
  const router = useRouter();
  const { locationOptions, isLoading } = useLocationListViewModel();

  return (
    <EntityListView
      title="Locations"
      options={locationOptions}
      isLoading={isLoading}
      getSubtitle={(location) => location.description}
      getMeta={(location) => location.region}
      onSelect={(location) =>
        router.push({
          pathname: '/views/LocationDetailsView',
          params: { query: location.name },
        })
      }
    />
  );
}
