export interface SearchProductListProps {
    keyword?: string;
    page: number;
    setPage: (value: number) => void;
    onTotalResultsChange: (total: number) => void;
}