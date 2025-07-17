import GitHubCalendar from "react-github-calendar";

export const Github = () => {
  return (
    <div className=" w-full">
      <GitHubCalendar
        hideColorLegend
        year={2025}
        blockSize={9}
        colorScheme="light"
        blockMargin={2}
        username="bytehash69"
        hideMonthLabels
      />
    </div>
  );
};
