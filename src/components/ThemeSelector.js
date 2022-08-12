import { useTheme } from "../hooks/useTheme";

const themeColors = ["pink", "black", "blue"];

export default function ThemeSelector() {
  const { changeColor,mode,changeMode } = useTheme();

  const toggle = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <div className={`themebtn ${mode}`}>
      <button className={`hea ${mode}`} onClick={toggle}></button>

      <div className="btn-wrap">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ backgroundColor: color }}
            className="btn"
          />
        ))}
      </div>
    </div>
  );
}
