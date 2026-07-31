import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useCreatureDetailsViewModel } from '../../viewmodels/useCreatureDetailsViewModel';
import { DetailPage } from '../../components/DetailPage';
import { DetailItemView, DetailsSection } from '../../components/DetailItemView';

export default function CreatureDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useCreatureDetailsViewModel(query as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((creature) => {
        const sections: DetailsSection[] = creature.drops?.length
          ? [{ title: "Drops", lines: creature.drops }]
          : [];

        return (
          <DetailItemView
            key={creature.id}
            image={creature.image}
            name={creature.name}
            description={creature.description}
            info={[{ label: "Location", value: creature.location }]}
            sections={sections}
          />
        );
      })}
    </DetailPage>
  );
}
