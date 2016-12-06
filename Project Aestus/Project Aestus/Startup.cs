using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Project_Aestus.Startup))]
namespace Project_Aestus
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
