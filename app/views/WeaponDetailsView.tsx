import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useWeaponDetailsViewModel } from '../../viewmodels/useWeaponDetailsViewModel';
import { DetailPage } from '../../components/DetailPage';
import { DetailItemView, DetailsSection } from '../../components/DetailItemView';

export default function WeaponDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useWeaponDetailsViewModel(query as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((weapon) => {
        const sections: DetailsSection[] = [
          ...(weapon.attack?.length
            ? [
                {
                  title: "Attack",
                  rows: weapon.attack.map((a) => ({
                    label: a.name,
                    value: String(a.amount),
                  })),
                },
              ]
            : []),
          ...(weapon.defence?.length
            ? [
                {
                  title: "Defence",
                  rows: weapon.defence.map((d) => ({
                    label: d.name,
                    value: String(d.amount),
                  })),
                },
              ]
            : []),
          ...(weapon.requiredAttributes?.length
            ? [
                {
                  title: "Requirements",
                  rows: weapon.requiredAttributes.map((r) => ({
                    label: r.name,
                    value: String(r.amount),
                  })),
                },
              ]
            : []),
          ...(weapon.scalesWith?.length
            ? [
                {
                  title: "Scales With",
                  rows: weapon.scalesWith.map((s) => ({
                    label: s.name,
                    value: s.scaling,
                  })),
                },
              ]
            : []),
        ];

        return (
          <DetailItemView
            key={weapon.id}
            image={weapon.image}
            name={weapon.name}
            description={weapon.description}
            info={[
              { label: "Category", value: weapon.category },
              { label: "Weight", value: `${weapon.weight} kg` },
            ]}
            sections={sections}
          />
        );
      })}
    </DetailPage>
  );
}
