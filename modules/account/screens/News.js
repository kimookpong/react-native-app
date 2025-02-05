import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, number } from 'react-native';
// import React, { useEffect, useState, useCallback } from "react";
import * as React from "react";
import Carousel, {ICarouselInstance,Pagination,} from 'react-native-reanimated-carousel';
import Animated, { useSharedValue, withTiming, interpolate, useAnimatedStyle } from "react-native-reanimated";

const PAGE_WIDTH = 300; // Example page width

const styles = StyleSheet.create({
    CarouselItem: {
        flex: 1,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: '100%'
    },
    item: {
        width: PAGE_WIDTH,
        height: 240,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc",
      },
});

function Index() {
    const scrollOffsetValue = useSharedValue<number>(0);
    const width = Dimensions.get('window').width


    const list = [
        {
            id: 1,
            title: 'Title1',
            image: require('../../../images/News/news1.jpg'),
        },
        {
            id: 2,
            title: 'Title2',
            image: require('../../../images/News/news2.jpg'),
        },
        {
            id: 3,
            title: 'Title3',
            image: 'https://hrms.wu.ac.th/uploads/perperson/e455fd8e689f71acb11a3f0c0c5fa986.jpg',
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <Carousel 
                width={width}
                height={width/2}
                data={list}
                defaultIndex={0}
                autoPlay={true}
                loop={true}
                autoplayDelay={100}
                autoplayInterval={1000}
                pagingEnabled={true}
                scrollAnimationDuration={1000}
                snapEnabled={true}
                //defaultScrollOffsetValue={1}
                onScrollStart={() => {
					console.log("Scroll start");
				}}
				onScrollEnd={() => {
					console.log("Scroll end");
				}}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item }) => (
                    <View style={styles.CarouselItem}>
                        <Image style={styles.img} source={item.image} />
                        <Text style={{ fontSize: 30 }}>{item.id}</Text>
                    </View>
                )}
            />
        </View>
    );
}

export default Index;


// import * as React from "react";
// import { Dimensions, Text, View } from "react-native";
// import { useSharedValue } from "react-native-reanimated";
// import Carousel, {
//   ICarouselInstance,
//   Pagination,
// } from "react-native-reanimated-carousel";
 
// const data = [...new Array(6).keys()];
// const width = Dimensions.get("window").width;
 
// function App() {
//   const ref = React.useRef<ICarouselInstance>(null);
//   const progress = useSharedValue<number>(0);
  
//   const onPressPagination = (index: number) => {
//     ref.current?.scrollTo({
//       /**
//        * Calculate the difference between the current index and the target index
//        * to ensure that the carousel scrolls to the nearest index
//        */
//       count: index - progress.value,
//       animated: true,
//     });
//   };
 
//   return (
//     <View style={{ flex: 1 }}>
//       <Carousel
//         ref={ref}
//         width={width}
//         height={width / 2}
//         data={data}
//         onProgressChange={progress}
//         renderItem={({ index }) => (
//           <View
//             style={{
//               flex: 1,
//               borderWidth: 1,
//               justifyContent: "center",
//             }}
//           >
//             <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
//           </View>
//         )}
//       />
 
//       <Pagination.Basic
//         progress={progress}
//         data={data}
//         dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
//         containerStyle={{ gap: 5, marginTop: 10 }}
//         // onPress={onPressPagination}
//       />
//     </View>
//   );
// }
 
// export default App;


// import React, { useEffect, useState } from "react";
// import { Dimensions, Text, View } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';

// function Index() {
//     const [pagingEnabled, setPagingEnabled] = useState(true)
//     const width = Dimensions.get('window').width;
//     return (
//         <View style={{ flex: 1 }}>
//             <Carousel
//                 loop
//                 width={width}
//                 height={width / 2}
//                 autoPlay={true}
//                 data={[...new Array(6).keys()]}
//                 pagingEnabled={pagingEnabled}
//                 scrollAnimationDuration={1000}
//                 onSnapToItem={(index) => console.log('current index:', index)}
//                 renderItem={({ index }) => (
//                     <View
//                         style={{
//                             flex: 1,
//                             borderWidth: 1,
//                             justifyContent: 'center',
//                         }}
//                     >
//                         <Text style={{ textAlign: 'center', fontSize: 30 }}>
//                             {index}
//                         </Text>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// }

// export default Index;
