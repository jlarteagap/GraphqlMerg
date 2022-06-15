import { useQuery} from '@apollo/client'
import ClientRow from './assets/ClientRow'
import { GET_CLIENTS } from '../queries/clientQueries'

export default function Clients(){
    const { loading, error, data } = useQuery(GET_CLIENTS)
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
console.log(data)
    return (
        <>
                {!loading && !error && (
            <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.clients.map(client => (
                        <ClientRow key={client.id} client={client} />
                    ))}
                </tbody>
            </table>
        )}
        </>
        )
}