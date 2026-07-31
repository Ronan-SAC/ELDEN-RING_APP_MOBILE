import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useNpcDetailsViewModel } from '../../viewmodels/useNpcDetailsViewModel';
import { DetailPage } from '../../components/DetailPage';
import { DetailItemView, DetailsSection } from '../../components/DetailItemView';

export default function NpcDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useNpcDetailsViewModel(query as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((npc) => {
        const sections: DetailsSection[] = npc.quote
          ? [
              {
                title: "Quote",
                text: npc.quote,
                align: "center",
              },
            ]
          : [];

        return (
          <DetailItemView
            key={npc.id}
            image={npc.image}
            name={npc.name}
            description={npc.description}
            info={[{ label: "Location", value: npc.location }]}
            sections={sections}
          />
        );
      })}
    </DetailPage>
  );
}
