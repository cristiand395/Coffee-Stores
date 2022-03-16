import { useRouter } from 'next/router'
import Link from 'next/Link'

const CoffeeStore = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div>
    <p>store: {router.query.id}</p>
    <Link href='/'>
      <a>Go back to home</a>
    </Link>
    </div>
  )
}

export default CoffeeStore