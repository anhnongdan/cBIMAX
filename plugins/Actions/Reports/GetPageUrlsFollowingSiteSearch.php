<?php
/**
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */
namespace Piwik\Plugins\Actions\Reports;

use Piwik\Piwik;
use Piwik\Plugin\ViewDataTable;
use Piwik\Plugins\Actions\Columns\DestinationPage;
use Piwik\Plugin\ReportsProvider;

class GetPageUrlsFollowingSiteSearch extends GetPageTitlesFollowingSiteSearch
{
    protected function init()
    {
        parent::init();
        $this->dimension     = new DestinationPage();
        $this->name          = Piwik::translate('Actions_WidgetPageUrlsFollowingSearch');
        $this->documentation = Piwik::translate('Actions_SiteSearchFollowingPagesDoc') . '<br/>' . Piwik::translate('General_UsePlusMinusIconsDocumentation');
        $this->order = 16;
        /**
         * [Thangnt 2017-03-10] Deregister unused subcategory for cBimax
         */        
        if (\Piwik\Config::getInstance()->General['bimax_product'] != 'cbimax') {
            $this->subcategoryId = 'Actions_SubmenuSitesearch';
        }
    }

    public function configureView(ViewDataTable $view)
    {
        $title = Piwik::translate('Actions_WidgetPageTitlesFollowingSearch');

        $this->configureViewForUrlAndTitle($view, $title);
    }

    public function getRelatedReports()
    {
        return array(
            ReportsProvider::factory('Actions', 'getPageTitlesFollowingSiteSearch'),
        );
    }
}
