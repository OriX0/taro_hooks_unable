import React from "react";
import { View } from "@tarojs/components";
import { useGetState } from "../../utils/hooks";
import styles from "./index.less";

const Index: React.FC = () => {
  const [orderType, setOrderType, getOrderType] = useGetState('推荐');

  const [otherUse,setOtherUse,getOtherUser] = useGetState('一个离谱的值');

  const handleOrderTypeClick = (orderTypeValue) => {
    setOrderType(orderTypeValue);
    console.log(
      "点击传过来的值为--",
      orderTypeValue,
      "getOrderType实时获取的值为--",
      getOrderType()
    );
  };

  return (
    <View className={styles.orderTypeBox}>
      <View
        className={orderType === 1 && styles.orderTypeSelected}
        onClick={() => handleOrderTypeClick('推荐')}
      >
        按推荐排序
      </View>
      <View
        className={orderType === 2 && styles.orderTypeSelected}
        onClick={() => handleOrderTypeClick('最新')}
      >
        按最新排序
      </View>
    </View>
  );
};
export default Index;
