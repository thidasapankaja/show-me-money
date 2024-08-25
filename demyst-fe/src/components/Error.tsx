export const ErrorMessage = ({error}: {error: string}) => {
  return (
    <div className="w-1/2 flex justify-center items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
      <div>{error}</div>
    </div>
  );
};
