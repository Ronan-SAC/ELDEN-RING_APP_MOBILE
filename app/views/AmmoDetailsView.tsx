import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useAmmoDetailsViewModel } from '../../viewmodels/useAmmoDetailsViewModel';
import { DetailPage } from '../../components/DetailPage';
import { DetailItemView, DetailsSection } from '../../components/DetailItemView';

export default function AmmoDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useAmmoDetailsViewModel(query as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((ammo) => {
        const sections: DetailsSection[] = ammo.attackPower?.length
          ? [
              {
                title: "Attack Power",
                rows: ammo.attackPower.map((ap) => ({
                  label: ap.name,
                  value: String(ap.amount),
                })),
              },
            ]
          : [];

        return (
          <DetailItemView
            key={ammo.id}
            image={ammo.image}
            name={ammo.name}
            description={ammo.description}
            info={[
              { label: "Type", value: ammo.type },
              ...(ammo.passive ? [{ label: "Passive", value: ammo.passive }] : []),
            ]}
            sections={sections}
          />
        );
      })}
    </DetailPage>
  );
}
