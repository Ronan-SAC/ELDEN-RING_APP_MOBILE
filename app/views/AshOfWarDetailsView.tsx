import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useAshOfWarDetailsViewModel } from '../../viewmodels/useAshOfWarDetailsViewModel';
import { DetailPage } from '../../components/DetailPage';
import { DetailItemView } from '../../components/DetailItemView';

export default function AshOfWarDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useAshOfWarDetailsViewModel(query as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((ash) => (
        <DetailItemView
          key={ash.id}
          image={ash.image}
          name={ash.name}
          description={ash.description}
          info={[
            { label: "Affinity", value: ash.affinity },
            { label: "Skill", value: ash.skill },
          ]}
        />
      ))}
    </DetailPage>
  );
}
