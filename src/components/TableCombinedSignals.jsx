export function TableCombinedSignals({signal1, signal2, signal3, signal4, combinedSignals}) {
    return (<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption class="p-5 text-xs uppercase text-left text-gray-700 bg-gray-50 dark:bg-zinc-900 dark:text-gray-400">
                Combined Signals
            </caption>
            <tbody>
                <tr class="bg-white border-b dark:bg-zinc-700 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Signal 1
                    </th>
                    <td class="px-6 py-4 font-medium">{signal1}</td>
                </tr>
                <tr class="bg-white border-b dark:bg-zinc-700 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Signal 2
                    </th>
                    <td class="px-6 py-4 font-medium">{signal2}</td>
                </tr>
                <tr class="bg-white border-b dark:bg-zinc-700 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Signal 3
                    </th>
                    <td class="px-6 py-4 font-medium">{signal3}</td>
                </tr>
                {/* <tr class="bg-white border-b dark:bg-zinc-700 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Signal 4
                    </th>
                    <td class="px-6 py-4 font-medium">{signal4}</td>
                </tr> */}
                <tr class="bg-white dark:bg-zinc-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Combined Signals
                    </th>
                    <td class="px-6 py-4 font-medium">{combinedSignals}</td>
                </tr>
            </tbody>
        </table>
    </div>)
}