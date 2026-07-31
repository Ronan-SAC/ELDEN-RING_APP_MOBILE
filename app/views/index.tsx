import { useRouter, Href } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import React from 'react';
import { MenuCard } from "../../components/MenuCard";

interface Category {
  title: string;
  image: string;
  route: Href;
}

export default function MainMenu() {
  const router = useRouter();

  const categories: Category[] = [
    {
      title: "Legendary Bosses",
      image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/elden-ring-bosses.jpg",
      route: "./views/BossListView",
    },
    {
      title: "Weapons",
      image: "https://eldenring.fanapis.com/images/weapons/17f69c35d2cl0i1oh7zuqfb3mdvsj.png",
      route: "./views/WeaponListView",
    },
    {
      title: "Armor",
      image: "https://eldenring.fanapis.com/images/armors/17f696e0685l0i0nblzy58h0qvewk.png",
      route: "./views/ArmorListView",
    },
    {
      title: "Talismans",
      image: "https://eldenring.fanapis.com/images/talismans/17f69f4f7a3l0i2soioqe3qysjxaw.png",
      route: "./views/TalismanListView",
    },
    {
      title: "Sorceries",
      image: "https://eldenring.fanapis.com/images/sorceries/17f69323f35l0hykrc6d1g3vajyc0n.png",
      route: "./views/SorceryListView",
    },
    {
      title: "Incantations",
      image: "https://eldenring.fanapis.com/images/incantations/17f696c7ce7l0hynrwmh6d0r0rwk2.png",
      route: "./views/IncantationListView",
    },
    {
      title: "Ashes of War",
      image: "https://eldenring.fanapis.com/images/ashes/17f699db6b0l0hzn9xsxxwtgyfky3.png",
      route: "./views/AshOfWarListView",
    },
    {
      title: "Key Items",
      image: "https://eldenring.fanapis.com/images/items/17f69e47912l0i1z0lip3kamll88h.png",
      route: "./views/ItemsListView",
    },
    {
      title: "Shields",
      image: "https://eldenring.fanapis.com/images/shields/17f69c62fe8l0i124u8fi4nc7dbfbf.png",
      route: "./views/ShieldListView",
    },
    {
      title: "Ammo",
      image: "https://eldenring.fanapis.com/images/ammos/17f69448ceel0i0a57bokoqz409yb.png",
      route: "./views/AmmoListView",
    },
    {
      title: "Spirit Summons",
      image: "https://eldenring.fanapis.com/images/spirits/17f698bf108l0i2rc1o532xfaytwzl.png",
      route: "./views/SpiritListView",
    },
    {
      title: "Classes",
      image: "https://eldenring.fanapis.com/images/classes/17f69d71826l0i32gkm3ndn3kywxqj.png",
      route: "./views/ClassListView",
    },
    {
      title: "Creatures",
      image: "https://eldenring.fanapis.com/images/creatures/17f6a3ceea8l0i6yrr9i9li6sityc.png",
      route: "./views/CreatureListView",
    },
    {
      title: "NPCs",
      image: "https://eldenring.fanapis.com/images/npcs/17f69a221c9l0i2ojlqe4t4u5lk6pc.png",
      route: "./views/NpcListView",
    },
    {
      title: "Locations",
      image: "https://eldenring.fanapis.com/images/locations/17f69c5a795l0i2m72bjeqbh713r3o.png",
      route: "./views/LocationListView",
    },
  ];

  return (
    <View className="flex-1 bg-[#0a0a0a] p-5 pt-10">
      <Text className="text-yellow-600 text-4xl font-serif mb-10 text-center tracking-wider font-bold">
        Compendium
      </Text>

      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 40
        }}
        showsVerticalScrollIndicator={false}
      >
        {categories.map((category) => (
          <MenuCard
            key={category.title}
            title={category.title}
            image={category.image}
            onPress={() => router.push(category.route)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
