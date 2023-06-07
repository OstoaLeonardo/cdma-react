export function TableUsers({code, data, xor, signal}) {
    return (<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption class="p-5 text-xs uppercase text-left text-gray-700 bg-gray-50 dark:bg-zinc-900 dark:text-gray-400">
                Spread Message
            </caption>
            <tbody>
                <tr class="bg-white border-b dark:bg-zinc-700 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Code
                    </th>
                    <td class="px-6 py-4 font-medium">{code}</td>
                </tr>
                <tr class="bg-white border-b dark:bg-zinc-700 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Data
                    </th>
                    <td class="px-6 py-4 font-medium">{data}</td>
                </tr>
                <tr class="bg-white border-b dark:bg-zinc-700 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        XOR
                    </th>
                    <td class="px-6 py-4 font-medium">{xor}</td>
                </tr>
                <tr class="bg-white dark:bg-zinc-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Voltage
                    </th>
                    <td class="px-6 py-4 font-medium">{signal}</td>
                </tr>
            </tbody>
        </table>
    </div>)
}