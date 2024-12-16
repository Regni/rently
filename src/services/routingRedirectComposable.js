import { useRoute } from 'vue-router'

export function useRoutingRedirect() {
  const route = useRoute()

  /* Determine redirect path, so that user can be redirected back to 
    different pages depending on what page they left when going to login */
  const determineRedirectPath = () => {
    try {
      const fromRoute = route.query.from ? decodeURIComponent(route.query.from.toString()) : null

      if (fromRoute && fromRoute.includes('/item')) {
        // If user came from any of the routes that has to do with items, redirect them back to that page
        return fromRoute
      }
    } catch (error) {
      console.error('Error determining redirect path:', error)
    }

    // Return home for all other fromRoutes and if no fromRoute is found
    return { name: 'home' }
  }

  return {
    determineRedirectPath,
  }
}
