import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import { Background } from "../../components/Background";
import { CardVideo } from "../../components/CardVideo/Index";

export function Videos() {
  return (
    <Background>
      <SafeAreaView>
        <ScrollView style={{margin: 10}}>
          <CardVideo content={`J_SFDuNioyM`} />
          <CardVideo content={`9XkEcHDnZq0`} />
          <CardVideo content={`ths0O_cIjM4`} />
          <CardVideo content={`T9j9_6QKhkI`} />
          <CardVideo content={`tKe2QKKmTyk`} />
          <CardVideo content={`2wy5MpTTTi0`} />
          <CardVideo content={`wJBof_K85YY`} />
          <CardVideo content={`zNm-7ljHepQ`} />
          <CardVideo content={`_Z4GgLDIpC4`} />
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
