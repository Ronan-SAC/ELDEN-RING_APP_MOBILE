import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useIncantationDetailsViewModel } from '../../viewmodels/useIncantationDetailsViewModel';
import { DetailPage } from '../../components/DetailPage';
import { DetailItemView, DetailsSection } from '../../components/DetailItemView';

export default function IncantationDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useIncantationDetailsViewModel(query as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((incantation) => {
        const sections: DetailsSection[] = [
          ...(incantation.effects
            ? [
                {
                  title: "Effects",
                  text: incantation.effects,
                },
              ]
            : []),
          ...(incantation.requires?.length
            ? [
                {
                  title: "Requirements",
                  rows: incantation.requires.map((req) => ({
                    label: req.name,
                    value: String(req.amount),
                  })),
                },
              ]
            : []),
        ];

        return (
          <DetailItemView
            key={incantation.id}
            image={incantation.image}
            name={incantation.name}
            description={incantation.description}
            info={[
              { label: "Type", value: incantation.type },
              { label: "FP Cost", value: String(incantation.cost) },
              { label: "Slots", value: String(incantation.slots) },
            ]}
            sections={sections}
          />
        );
      })}
    </DetailPage>
  );
}
