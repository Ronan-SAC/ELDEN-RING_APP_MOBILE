import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useLocationDetailsViewModel } from '../../viewmodels/useLocationDetailsViewModel';
import { DetailPage } from '../../components/DetailPage';
import { DetailItemView } from '../../components/DetailItemView';

export default function LocationDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useLocationDetailsViewModel(query as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((location) => (
        <DetailItemView
          key={location.id}
          image={location.image}
          name={location.name}
          description={location.description}
        />
      ))}
    </DetailPage>
  );
}
