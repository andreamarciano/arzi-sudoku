import { Modal, View, Text, TouchableOpacity } from "react-native";

type SidebarProps = {
  visible: boolean;
  onClose: () => void;
};

export default function Sidebar({ visible, onClose }: SidebarProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View className="flex-1 flex-row">
        <View className="w-3/4 bg-white shadow-lg p-4">
          <Text className="text-xl font-bold mb-4">Menu</Text>
          <TouchableOpacity onPress={onClose} className="py-2">
            <Text className="text-blue-500">Chiudi</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-2">
            <Text>Storico</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-2">
            <Text>Impostazioni</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="flex-1 bg-black/40" onPress={onClose} />
      </View>
    </Modal>
  );
}
