import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useSorceryDetailsViewModel } from '../../viewmodels/useSorceryDetailsViewModel';
import { DetailPage } from '../../components/DetailPage';
import { DetailItemView, DetailsSection } from '../../components/DetailItemView';

export default function SorceryDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useSorceryDetailsViewModel(query as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((sorcery) => {
        const sections: DetailsSection[] = [
          ...(sorcery.effects
            ? [
                {
                  title: "Effects",
                  text: sorcery.effects,
                },
              ]
            : []),
          ...(sorcery.requires?.length
            ? [
                {
                  title: "Requirements",
                  rows: sorcery.requires.map((req) => ({
                    label: req.name,
                    value: String(req.amount),
                  })),
                },
              ]
            : []),
        ];

        return (
          <DetailItemView
            key={sorcery.id}
            image={sorcery.image}
            name={sorcery.name}
            description={sorcery.description}
            info={[
              { label: "Type", value: sorcery.type },
              { label: "FP Cost", value: String(sorcery.cost) },
              { label: "Slots", value: String(sorcery.slots) },
            ]}
            sections={sections}
          />
        );
      })}
    </DetailPage>
  );
}
