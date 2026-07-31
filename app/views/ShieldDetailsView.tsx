import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useShieldDetailsViewModel } from '../../viewmodels/useShieldDetailsViewModel';
import { DetailPage } from '../../components/DetailPage';
import { DetailItemView, DetailsSection } from '../../components/DetailItemView';

export default function ShieldDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useShieldDetailsViewModel(query as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((shield) => {
        const sections: DetailsSection[] = [
          ...(shield.attack?.length
            ? [
                {
                  title: "Attack",
                  rows: shield.attack.map((a) => ({
                    label: a.name,
                    value: String(a.amount),
                  })),
                },
              ]
            : []),
          ...(shield.defence?.length
            ? [
                {
                  title: "Defence",
                  rows: shield.defence.map((d) => ({
                    label: d.name,
                    value: String(d.amount),
                  })),
                },
              ]
            : []),
          ...(shield.requiredAttributes?.length
            ? [
                {
                  title: "Requirements",
                  rows: shield.requiredAttributes.map((r) => ({
                    label: r.name,
                    value: String(r.amount),
                  })),
                },
              ]
            : []),
          ...(shield.scalesWith?.length
            ? [
                {
                  title: "Scales With",
                  rows: shield.scalesWith.map((s) => ({
                    label: s.name,
                    value: s.scaling,
                  })),
                },
              ]
            : []),
        ];

        return (
          <DetailItemView
            key={shield.id}
            image={shield.image}
            name={shield.name}
            description={shield.description}
            info={[
              { label: "Category", value: shield.category },
              { label: "Weight", value: `${shield.weight} kg` },
            ]}
            sections={sections}
          />
        );
      })}
    </DetailPage>
  );
}
