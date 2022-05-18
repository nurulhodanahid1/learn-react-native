import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Pressable } from 'react-native';

export const Button = ({ title }) => {
  return (
    <Pressable style={{ marginLeft: 30, marginRight: 30 }} onPress={() => {
      alert("pressed")
    }}>
      <View style={{ backgroundColor: "green", marginTop: 10, padding: 10, borderRadius: 10 }}>
        <Text style={{ textAlign: "center", color: "white" }}>{title}</Text>
      </View>
    </Pressable>
  )
}

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <ScrollView> */}
        {/* <View style={{ height: 30, backgroundColor: "red" }}>
          <Text style={{ fontSize: 20 }}>Hello World!!</Text>
        </View>
        <View>
          <Image
            style={{ height: 200, width: 200, backgroundColor: "red" }}
            source={require("./assets/favicon.png")}
          />
        </View>
        <View>
          <Button title="press 1" />
          <Button title="press 2" />
        </View>
        <View>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt in quo perferendis veritatis nisi magnam ipsam. Vel quaerat molestiae unde, reprehenderit, molestias officiis praesentium et consequuntur quia, veniam alias dolorum sit dolores ratione commodi ipsa pariatur aut iusto nobis id nemo ab? Laborum assumenda veritatis inventore earum id ex dolor tenetur nobis rerum dignissimos. Assumenda cumque deserunt laborum, dolorem quidem laboriosam, saepe corporis, veritatis voluptatem vel dignissimos fugit nobis similique tenetur fuga dicta perferendis et quis blanditiis quos! Laudantium odio deleniti minus quae tempora cupiditate, dignissimos cumque velit quo molestiae similique commodi assumenda, possimus minima soluta magni natus repudiandae nihil?</Text>
          <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe non sit maiores commodi tenetur, beatae enim quas qui placeat perspiciatis ratione modi eveniet quis, fugiat praesentium deserunt voluptatibus. Ea voluptates culpa molestiae, omnis rerum, similique magnam deleniti nam incidunt dicta libero repudiandae repellat, sed voluptatum alias nobis iusto aspernatur quae amet adipisci placeat. Placeat sed odit aliquam error minima dicta voluptatem facere fugiat, soluta neque et? Quod autem nemo praesentium iure porro voluptatem reiciendis similique eum debitis, repudiandae, labore architecto veniam. Id fugiat quia voluptates? At delectus velit aliquam, necessitatibus amet quam tempora, cum ex sapiente quidem minima sint quas.</Text>
        </View> */}
        <View style={{flex:1,justifyContent:"space-between"}}>
          <View style={styles.view1} />
          <View style={styles.view2} />
          <View style={styles.view3} />
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view1: {
    height: 100,
    width: 90,
    backgroundColor: 'red',
  },
  view2: {
    height: 100,
    width: 90,
    backgroundColor: 'green',
    alignSelf: "flex-end"
  },
  view3: {
    height: 100,
    width: 90,
    backgroundColor: 'blue'
  }
});
