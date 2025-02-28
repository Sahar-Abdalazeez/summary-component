import { Colors } from "../../styles/colors";
import { CardContainer, Category, Score, Total } from "./styledComponents";

export const SummaryCard = ({ category, score, icon }) => {
  const icons = import.meta.glob("../../assets/*.svg", { eager: true });
  // Function to extract filename from the path
  const getFileName = (path) => path.split("/").pop();

  const iconName = getFileName(icon); // Extract filename from JSON

  const iconSrc = Object.entries(icons).find(([key]) =>
    key.endsWith(iconName)
  )?.[1]?.default;

  const getCategoryColor = (category) => {
    switch (category) {
      case "Reaction":
        return Colors.LIGHT_RED;
      case "Memory":
        return Colors.ORANGEY_YELLOW;
      case "Verbal":
        return Colors.GREEN_TEAL;
      default:
        return Colors.VIOLET_COLOR;
    }
  };
  return (
    <CardContainer textColor={getCategoryColor(category)}>
      {iconSrc && <img src={iconSrc} alt={category} width={20} height={20} />}
      <Category textColor={getCategoryColor(category)}>{category}</Category>
      <Score>{score}</Score>
      <Total>{"  / 100"}</Total>
    </CardContainer>
  );
};
