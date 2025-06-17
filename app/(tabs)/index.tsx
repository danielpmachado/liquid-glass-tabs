import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const images = [
  {
    id: "1",
    uri: "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ocean Waves",
    description: "Powerful waves crashing onto the rocky shoreline.",
  },
  {
    id: "2",
    uri: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "City Lights",
    description: "Skyscrapers glowing under the night sky.",
  },
  {
    id: "3",
    uri: "https://images.unsplash.com/photo-1581789018630-dd0e5afc594a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mountain Trail",
    description: "A serene walking trail in the heart of the mountains.",
  },
  {
    id: "4",
    uri: "https://images.unsplash.com/photo-1750024774702-1fd1a377fdfb?q=80&w=3275&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sunset Over Hills",
    description: "A beautiful sunset scene taken from a high hilltop.",
  },
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedImage(item)}>
      <View style={styles.card}>
        <Image source={{ uri: item.uri }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Image Gallery</Text>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListFooterComponent={<View style={{ height: 50 }} />}
      />

      <Modal
        visible={!!selectedImage}
        transparent={true}
        onRequestClose={() => setSelectedImage(null)}
      >
        <View style={styles.modalBackground}>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={() => setSelectedImage(null)}
          >
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
          {selectedImage && (
            <ScrollView contentContainerStyle={styles.modalContent}>
              <Image
                source={{ uri: selectedImage.uri }}
                style={styles.fullImage}
                resizeMode="contain"
              />
              <Text style={styles.modalTitle}>{selectedImage.title}</Text>
              <Text style={styles.modalDescription}>
                {selectedImage.description}
              </Text>
            </ScrollView>
          )}
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    padding: 10,
  },
  headerTitle: {
    marginTop: 70,
    marginHorizontal: 10,
    fontSize: 24,
    fontWeight: 700,
  },
  card: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    height: 220,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
    marginHorizontal: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "black",
  },
  modalClose: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 2,
  },
  closeText: {
    fontSize: 28,
    color: "white",
  },
  modalContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  fullImage: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
    marginBottom: 8,
    textAlign: "center",
  },
  modalDescription: {
    fontSize: 16,
    color: "lightgray",
    textAlign: "center",
  },
});
