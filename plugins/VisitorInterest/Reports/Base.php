<?php
/**
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */
namespace Piwik\Plugins\VisitorInterest\Reports;

abstract class Base extends \Piwik\Plugin\Report
{
    protected function init()
    {
        $this->categoryId = 'General_Visitors';
        
        /**
         * [Thangnt 2017-03-10] Deregister unused subcategory for cBimax
         */
        if (\Piwik\Config::getInstance()->General['bimax_product'] != 'cbimax') {
            $this->subcategoryId = 'VisitorInterest_Engagement';
        }
    }

}
